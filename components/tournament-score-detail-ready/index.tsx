import React, { useState, useEffect } from 'react';
import Tournament from '../../data-types/tournament';

interface Props {
  tournamentData: Tournament;
}

const TournamentScoreDetailReady: React.FC<Props> = ({ tournamentData }) => {
  const targetTime: any = new Date(tournamentData.tournamentDate);
  const now: any = new Date();
  const hour = tournamentData.time.split(':')[0];
  const min = tournamentData.time.split(':')[1];
  const offset = 9 * 60 * 60 * 1000; // 9시간을 밀리초로 변환

  const calculateTimeLeft = () => {
    const difference: any = targetTime - offset - now + Number(hour) * 60 * 60 * 1000 + Number(min) * 60 * 1000;
    let timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetTime]);

  const { days, hours, minutes, seconds } = timeLeft;
  const daysArr = String(timeLeft.days).split('');
  const hoursArr = String(timeLeft.hours).split('');
  const minutesArr = String(timeLeft.minutes).split('');
  const secondsArr = String(timeLeft.seconds).split('');
  return (
    <div className="bg-gradient-to-r from-main-blue via-black to-black relative md:static md:p-5">
      <div className="md:flex md:flex-wrap md:justify-between sm:flex-col sm:items-center gap-6">
        <div className="absolute top-7 left-8 font15500white flex md:static sm:flex-col sm:items-center sm:gap-2">
          <span className="font20700white mr-4 sm:mr-0">Next</span>
          <p>
            {new Date(tournamentData.tournamentDate).toLocaleDateString()} {tournamentData.time}
          </p>
          <span className="font14700gray ml-4 sm:ml-0">{tournamentData.venuePlace}</span>
        </div>
        <div className="absolute top-5 right-8 font15500white flex gap-1 items-center md:static">
          {daysArr.length < 2 && (
            <>
              <p className="bg-darker-gray p-2 rounded border border-light-gray sm:p-1">0</p>
              <p className="bg-darker-gray p-2 rounded border border-light-gray sm:p-1">{daysArr}</p>
            </>
          )}
          {daysArr.length === 2 &&
            daysArr.map(d => (
              <p className="bg-darker-gray p-2 rounded border border-light-gray sm:p-1" key={d}>
                {d}
              </p>
            ))}
          <p className="font1624500white mr-1">일</p>
          {hoursArr.length < 2 && (
            <>
              <p className="bg-darker-gray p-2 rounded border border-light-gray sm:p-1">0</p>
              <p className="bg-darker-gray p-2 rounded border border-light-gray sm:p-1">{hoursArr}</p>
            </>
          )}
          {hoursArr.length === 2 &&
            hoursArr.map(d => (
              <p className="bg-darker-gray p-2 rounded border border-light-gray sm:p-1" key={d}>
                {d}
              </p>
            ))}
          <p className="font1624500white mr-1">시</p>
          {minutesArr.length < 2 && (
            <>
              <p className="bg-darker-gray p-2 rounded border border-light-gray sm:p-1">0</p>
              <p className="bg-darker-gray p-2 rounded border border-light-gray sm:p-1">{minutesArr}</p>
            </>
          )}
          {minutesArr.length === 2 &&
            minutesArr.map(d => (
              <p className="bg-darker-gray p-2 rounded border border-light-gray sm:p-1" key={d}>
                {d}
              </p>
            ))}
          <p className="font1624500white mr-1">분</p>
          {secondsArr.length < 2 && (
            <>
              <p className="bg-darker-gray p-2 rounded border border-light-gray sm:p-1">0</p>
              <p className="bg-darker-gray p-2 rounded border border-light-gray sm:p-1">{secondsArr}</p>
            </>
          )}
          {secondsArr.length === 2 &&
            secondsArr.map(d => (
              <p className="bg-darker-gray p-2 rounded border border-light-gray sm:p-1" key={d}>
                {d}
              </p>
            ))}
          <p className="font1624500white mr-1">초</p>
        </div>
      </div>
      <div className="flex py-4 justify-center items-center gap-14 sm:gap-2">
        <div className="flex gap-6 items-center sm:gap-2">
          <p className="font1630700white">{tournamentData.homeTeamName}</p>
          <p className="w-10 h-10">
            <img src={`${tournamentData.homeTeamLogo.tempUrl}`} alt="" />
          </p>
        </div>
        <p className="font1620500darkgray">VS</p>
        <div className="flex gap-6 items-center sm:gap-2">
          <p className="w-10 h-10">
            <img src={`${tournamentData.awayTeamLogo.tempUrl}`} alt="" />
          </p>
          <p className="font1630700white">{tournamentData.awayTeamName}</p>
        </div>
      </div>
    </div>
  );
};

export default TournamentScoreDetailReady;
