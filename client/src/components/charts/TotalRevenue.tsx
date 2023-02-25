import { Box, Typography, Stack } from "@pankod/refine-mui";
import ReactApexChart from "react-apexcharts";
import { ArrowCircleUpRounded } from "@mui/icons-material";

import { TotalRevenueOptions, TotalRevenueSeries } from "./chart.config";

const TotalRevenue = () => {
  return (
    <Box
      display="flex"
      p={4}
      flex={1}
      flexDirection="column"
      bgcolor="#fcfcfc"
      id="chart"
      borderRadius="15px"
    >
      <Typography fontSize={18} fontWeight={600} color="#11142d">
        Total Revenue
      </Typography>

      <Stack my="20px" direction="row" gap={4} flexWrap="wrap">
        <Typography fontSize={28} fontWeight={700} color="#11142d">
          $ 1,000,000
        </Typography>
        <Stack direction="row" gap={1} alignItems="center">
          <ArrowCircleUpRounded sx={{ fontsize: 25, color: "#fd7e14" }} />
          <Stack>
            <Typography fontSize={15} color="#fd7e14">
              10%
            </Typography>
            <Typography fontSize={12} color="#808191">
              Since last month
            </Typography>
          </Stack>
        </Stack>
      </Stack>

      <ReactApexChart
        options={TotalRevenueOptions}
        series={TotalRevenueSeries}
        type="bar"
        height={300}
      />
    </Box>
  );
};

export default TotalRevenue;
