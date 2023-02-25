import { Box, Stack, Typography } from "@pankod/refine-mui";
import { propertyReferralsInfo } from "constants/index";

interface ProgressBarProps {
  title: string;
  percentage: number;
  color: string;
}

const ProgressBar = ({ title, percentage, color }: ProgressBarProps) => (
  <Box width="100%">
    <Stack direction="row" alignItems="center" justifyContent="space-between">
      <Typography fontSize={16} fontWeight={500} color="#11142d">
        {title}
      </Typography>
      <Typography fontSize={16} fontWeight={500} color="#11142d">
        {percentage}%
      </Typography>
    </Stack>
    <Box
      bgcolor="#e8e8e8"
      height="8px"
      borderRadius={1}
      mt={2}
      width="100%"
      position="relative"
    >
      <Box
        bgcolor={color}
        width={`${percentage}%`}
        height="100%"
        borderRadius={1}
        position="absolute"
      />
    </Box>
  </Box>
);

const PropertyReferrals = () => {
  return (
    <Box
      display="flex"
      p={4}
      flexDirection="column"
      bgcolor="#fcfcfc"
      id="chart"
      borderRadius="15px"
      minWidth={490}
    >
      <Typography fontSize={18} fontWeight={600} color="#11142d">
        Property Referrals
      </Typography>

      <Stack my="20px" direction="column" gap={4} flexWrap="wrap">
        {propertyReferralsInfo.map((item) => (
          <ProgressBar key={item.title} {...item} />
        ))}
      </Stack>
    </Box>
  );
};

export default PropertyReferrals;
