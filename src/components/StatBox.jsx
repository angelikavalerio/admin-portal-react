import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";
import ProgressCircle from "./ProgressCircle";
import PropTypes from 'prop-types';

const StatBox = ({ title, subtitle, icon, progress, increase }) => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  return (
    <Box width="100%" m="0 30px">
      <Box display="flex" justifyContent="space-between">
        <Box>
          {icon}
          <Typography variant="h4" fontWeight="bold" sx={{
            color: colors.gray[100]
          }}>
            {title}
          </Typography>
        </Box>
        <Box>
          <ProgressCircle progress={progress} />
        </Box>
      </Box>
      <Box display="flex" justifyContent="space-between" mt="2px">
        <Typography variant="h5" sx={{
          color: colors.greenAccent[500]
        }}>
          {subtitle}
        </Typography>
        <Typography
          variant="h5"
          fontStyle="italic"
          fontWeight="bold"
          sx={{
            color: colors.gray[600]
          }}>
          {title}
        </Typography>
      </Box>
    </Box>
  )
}

StatBox.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  icon: PropTypes.object,
  progress: PropTypes.string,
  increase: PropTypes.string
}


export default StatBox