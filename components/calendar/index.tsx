import { useCallback, useMemo, useState } from 'react';
import {
  format,
  addMonths,
  subMonths,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  addDays,
  differenceInCalendarDays,
} from 'date-fns';
import Link from 'next/link';
import TagLarge from '../tag-large';
import { LoadedLogic } from '../../page-bodies/main/use-logic';

interface Props {
  logic: LoadedLogic;
}

const Calendar: React.FC<Props> = ({ logic }) => {
  const [mobileTournamentName, setMobileTournamentName] = useState<string>('');
  const [currentDate, setCurrentDate] = useState(new Date());
  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(currentDate);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);
  const weekMock = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'];
  const weekMobile = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  const nextMonthHandler = useCallback(() => {
    setCurrentDate(addMonths(currentDate, 1));
    logic.setCurrentDate(addMonths(currentDate, 1));
  }, [currentDate]);
  const prevMonthHandler = useCallback(() => {
    setCurrentDate(subMonths(currentDate, 1));
    logic.setCurrentDate(subMonths(currentDate, 1));
  }, [currentDate]);
  const createMonth = useMemo(() => {
    const monthArray = [];
    let day = startDate;
    while (differenceInCalendarDays(endDate, day) >= 0) {
      monthArray.push(day);
      day = addDays(day, 1);
    }
    return monthArray;
  }, [startDate, endDate]);
  return (
    <div className="w-[1060px] md:w-full">
      <TagLarge title="League" />
      <div className="space20" />
      <div className="flex justify-center">
        <button
          className="bg-black/[.1] w-12 flex justify-center items-center"
          onClick={prevMonthHandler}
          type="button"
        >
          <img src="/arrow_left.png" alt="" />
        </button>
        <div className="font16800white py-3 flex-1 bg-black bg-gradient-to-r from-gradient-start via-gradient-middle to-gradient-end cursor-pointer">
          {format(currentDate, 'yyyy')} {format(currentDate, 'M월')}
        </div>
        <button
          className="bg-black/[.1] w-12 flex justify-center items-center"
          onClick={nextMonthHandler}
          type="button"
        >
          <img src="/arrow_right.png" alt="" />
        </button>
      </div>
      <div className="flex sm:hidden">
        {weekMock.map((v, i) => {
          return (
            // eslint-disable-next-line react/no-array-index-key
            <div key={`day${i}`} className="text-white flex-1 text-center py-4 bg-black">
              {v}
            </div>
          );
        })}
      </div>
      <div className="hidden sm:flex">
        {weekMobile.map((v, i) => {
          return (
            // eslint-disable-next-line react/no-array-index-key
            <div key={`day${i}`} className="text-white flex-1 text-center py-4 bg-black">
              {v}
            </div>
          );
        })}
      </div>
      <div className="flex flex-wrap bg-black">
        {createMonth.map((v, i) => {
          return (
            <div
              // eslint-disable-next-line react/no-array-index-key
              key={`date${i}`}
              className="w-[14.28%] border-solid border border-[#323232] h-28 relative sm:h-10 sm:flex sm:justify-center sm:items-center"
            >
              <span className="text-white border border-solid border-[#323232] absolute w-10 h-8 text-center leading-8 sm:border-none">
                {format(v, 'd')}
              </span>

              <div className="mt-8 p-1 px-2 sm:mt-0">
                {logic.tournaments.map(t => {
                  const tournamentMonth = new Date(t.tournamentDate).getMonth();
                  const tournamentDate = new Date(t.tournamentDate).getDate();
                  const nowMonth = v.getMonth();
                  const nowDate = v.getDate();
                  if (tournamentMonth === nowMonth && tournamentDate === nowDate) {
                    return (
                      <>
                        <p
                          className="text-white bg-dark-gray rounded py-1 px-2 cursor-pointer font12400gray truncate sm:hidden mb-1"
                          key={t.id}
                        >
                          <Link href={`/tournament/${t.id}`}>
                            {t.homeTeamName} vs {t.awayTeamName}
                          </Link>
                        </p>
                        <button
                          className="hidden sm:block flex justify-center cursor-pointer"
                          onClick={() => setMobileTournamentName(`${t.homeTeamName} vs ${t.awayTeamName}`)}
                        >
                          <span className="text-[#E20B30] text-xs relative top-3">
                            <img src="/dot.png" alt="dot" className="w-2" />
                          </span>
                        </button>
                      </>
                    );
                  }
                  return '';
                })}
              </div>
            </div>
          );
        })}

        <div className="text-white hidden sm:block p-3 text-xs">{mobileTournamentName}</div>
      </div>
    </div>
  );
};

export default Calendar;
