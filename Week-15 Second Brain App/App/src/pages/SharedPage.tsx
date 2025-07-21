import { useLocation, useParams } from "react-router-dom";
import Card from "../components/CardUi/Card";
import { useEffect, useState } from "react";

const SharedPage = () => {
  const { id } = useParams();
  const location = useLocation();
  const [sharedData, setSharedData] = useState<any[]>([]);

  useEffect(() => {
    // First try to get data from location state (if navigated within app)
    if (location.state?.shared) {
      setSharedData(location.state.shared);
    } else {
      // If no state, try to get from URL query params
      const queryParams = new URLSearchParams(location.search);
      const dataParam = queryParams.get('data');
      if (dataParam) {
        try {
          const decodedData = JSON.parse(decodeURIComponent(dataParam));
          setSharedData(decodedData);
        } catch (e) {
          console.error("Failed to parse shared data", e);
        }
      }
    }
  }, [location]);

  return (
    <div className="bg-slate-200 w-full min-h-screen">
      <div className="flex justify-between">
        <div className="font-bold text-3xl mt-4 ml-8">Shared Content By Second Brain...</div>
      </div>
      <div className="ml-7 mt-6 flex flex-wrap gap-x-3 gap-y-5">
        {sharedData.length > 0 ? (
          sharedData.map((item: any, idx: number) => (
            <Card
              key={idx}
              icon={item.contentType}
              tag={item.tag}
              title={item.title}
              link={item.link}
            />
          ))
        ) : (
          <div className="text-2xl font-semibold">No shared content found.</div>
        )}
      </div>
    </div>
  );
};

export default SharedPage;