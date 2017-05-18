import { environment } from "../utils/constants"

const prodConfig = {
  apiUrl: "http://qa.gopus.in"
};

const devConfig = {
  apiUrl: "https://gopus.in"
};

export default (process.env.NODE_ENV === environment.prod ? prodConfig : devConfig);