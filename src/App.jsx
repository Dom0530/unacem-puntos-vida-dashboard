import { useMemo, useState } from "react";
import "./App.css";
import dataset from "./data/dashboard-data.json";
import Header from "./components/Header/Header";
import Filters from "./components/Filters/Filters";
import RankingSection from "./components/RankingSection/RankingSection";
import {
  getMonthlyData,
  getMonthlyTopThree,
  getPreviousMonthWinner,
  getAnnualRanking,
  getHallOfFame,
  getMonthLabel,
} from "./utils/dashboardHelpers";

export default function App() {
  const [year, setYear] = useState("2026");
  const [month, setMonth] = useState("8");
  const [location, setLocation] = useState("Lima");

  const view = useMemo(() => {
    const monthly = getMonthlyData(dataset, year, month, location);
    const previousMonth = Number(month) - 1;

    return {
      people: {
        monthlyTop: getMonthlyTopThree(monthly, "people"),
        previousWinner: getPreviousMonthWinner(dataset, year, month, location, "people"),
        annual: getAnnualRanking(dataset, year, location, "people"),
        hall: getHallOfFame(dataset, year, "people"),
      },
      areas: {
        monthlyTop: getMonthlyTopThree(monthly, "areas"),
        previousWinner: getPreviousMonthWinner(dataset, year, month, location, "areas"),
        annual: getAnnualRanking(dataset, year, location, "areas"),
        hall: getHallOfFame(dataset, year, "areas"),
      },
      previousMonthLabel: previousMonth >= 1 ? getMonthLabel(dataset, previousMonth) : null,
      monthLabel: getMonthLabel(dataset, month),
    };
  }, [year, month, location]);

  function handleFilterChange(name, value) {
    if (name === "year") setYear(value);
    if (name === "month") setMonth(value);
    if (name === "location") setLocation(value);
  }

  return (
    <div className="app-shell">
      <Header lastUpdated="31/08/2026 07:51 AM" />

      <main className="dashboard">
        <div className="intro-row">
          <div>
            <span className="eyebrow-dark">Sistema de reconocimiento</span>
            <h1>{view.monthLabel} 2026 · {location === "Junin" ? "Junín" : location}</h1>
          </div>
          <p>Consulta los reconocimientos mensuales y rankings anuales.</p>
        </div>

        <Filters
          year={year}
          month={month}
          location={location}
          months={dataset.months}
          locations={["Lima", "Junin"]}
          onChange={handleFilterChange}
        />

        <div className="dashboard-grid">
          <RankingSection
            type="people"
            monthlyTop={view.people.monthlyTop}
            previousWinner={view.people.previousWinner}
            previousMonthLabel={view.previousMonthLabel}
            annualRanking={view.people.annual}
            hallOfFame={view.people.hall}
            months={dataset.months}
          />

          <RankingSection
            type="areas"
            monthlyTop={view.areas.monthlyTop}
            previousWinner={view.areas.previousWinner}
            previousMonthLabel={view.previousMonthLabel}
            annualRanking={view.areas.annual}
            hallOfFame={view.areas.hall}
            months={dataset.months}
          />
        </div>
      </main>

      <footer className="app-footer">
        DEMO · Datos locales desde dashboard-data.json · Sin backend ni APIs externas
      </footer>
    </div>
  );
}
