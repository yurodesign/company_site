import { headers } from "next/headers";
import HomeMain from "./components/HomeMain";

export default async function Page() {
  // In Next.js 15+, headers() is an async function
  const headerList = await headers(); 
  
  // Vercel automatically provides this header
  const countryCode = headerList.get('x-vercel-ip-country') || 'IE';
  // const userIp = headerList.get('x-real-ip');

  return <HomeMain countryCode={countryCode} />;
}