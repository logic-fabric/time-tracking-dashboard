import { DashboardPage } from "./pages/dashboardPage.js";
import { DataFetcher } from "./data/dataFetcher.js";

const DATA_SOURCE = "./js/data/jeremy-robson.json";
const dataFetcher = new DataFetcher(DATA_SOURCE);

new DashboardPage(dataFetcher);

