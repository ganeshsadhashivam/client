import React from "react";
import { Box, useTheme } from "@mui/material";
import { useGetGeographyQuery } from "state/api";
import { ResponsiveChoropleth } from "@nivo/geo";
import { geoData } from "state/geoData";
import { ResponsiveChoroplethCanvas } from "@nivo/geo";
import Header from "components/Header";
const Geography = () => {
  const theme = useTheme();
  const { data } = useGetGeographyQuery();
  console.log("data", data);
  return (
    <Box m="1.5rem 2.5rem">
      <Header title="GEOGRAPHY" subtitle="Find where your users are located" />
      <Box
        mt="40px"
        height="75vh"
        border={`1px solid ${theme.palette.secondary[200]}`}
        borderRadius="4px"
      >
        {data ? (
          <ResponsiveChoroplethCanvas
            data={data}
            features={geoData.features}
            margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
            colors="RdBu"
            domain={[0, 1000000]}
            unknownColor="#101b42"
            label="properties.name"
            valueFormat=".2s"
            projectionTranslation={[0.5, 0.5]}
            projectionRotation={[0, 0, 0]}
            graticuleLineColor="rgba(0, 0, 0, .2)"
            borderWidth={0.5}
            borderColor="#101b42"
            legends={[
              {
                anchor: "bottom-left",
                direction: "column",
                justify: true,
                translateX: 20,
                translateY: -60,
                itemsSpacing: 0,
                itemWidth: 92,
                itemHeight: 18,
                itemDirection: "left-to-right",
                itemOpacity: 0.85,
                symbolSize: 18,
              },
            ]}
          />
        ) : (
          <>Loading...</>
        )}
      </Box>
    </Box>
  );
};

export default Geography;

// #101b42
