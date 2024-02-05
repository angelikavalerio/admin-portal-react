import { Box, useTheme, Typography } from '@mui/material'
import Header from '../../components/Header'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { tokens } from '../../theme'

const FAQ = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions Page" />

      <Box height="75vh" sx={{
        marginTop: "10px",
        overflowY: "auto"
      }}>
        <Accordion defaultExpanded>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography color={colors.greenAccent[500]} variant="h5">
              An important question
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio vel iusto neque ipsam suscipit tempore numquam,
              incidunt et odio veniam voluptate, sequi doloribus ea maxime ab iure aspernatur. Vitae, quas.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography color={colors.greenAccent[500]} variant="h5">
              An important question
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio vel iusto neque ipsam suscipit tempore numquam,
              incidunt et odio veniam voluptate, sequi doloribus ea maxime ab iure aspernatur. Vitae, quas.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography color={colors.greenAccent[500]} variant="h5">
              An important question
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio vel iusto neque ipsam suscipit tempore numquam,
              incidunt et odio veniam voluptate, sequi doloribus ea maxime ab iure aspernatur. Vitae, quas.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography color={colors.greenAccent[500]} variant="h5">
              An important question
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio vel iusto neque ipsam suscipit tempore numquam,
              incidunt et odio veniam voluptate, sequi doloribus ea maxime ab iure aspernatur. Vitae, quas.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography color={colors.greenAccent[500]} variant="h5">
              An important question
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio vel iusto neque ipsam suscipit tempore numquam,
              incidunt et odio veniam voluptate, sequi doloribus ea maxime ab iure aspernatur. Vitae, quas.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Box>

  )
}

export default FAQ