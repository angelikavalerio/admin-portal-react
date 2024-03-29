import { useState } from "react";
import PropTypes from 'prop-types';
import { Menu, MenuItem } from "react-pro-sidebar"
import { Sidebar as ProSidebar } from "react-pro-sidebar"
import useMediaQuery from '@mui/material/useMediaQuery';
import { Box, IconButton, Typography, useTheme } from '@mui/material'
import { useNavigate } from "react-router-dom"
import { tokens } from "../../theme";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined'
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined'
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined'
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined'
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined'
import HelpOutlinedIcon from '@mui/icons-material/HelpOutlined'
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined'
import PieChartOutlineOutlinedIcon from '@mui/icons-material/PieChartOutlineOutlined'
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined'
import MapOutlinedIcon from '@mui/icons-material/MapOutlined'



const Item = ({ title, to, icon, selected, setSelected }) => {
  const navigate = useNavigate()
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  const handleItemClick = () => {
    setSelected(title)
    navigate(to)
  }

  return (
    <MenuItem
      icon={icon}
      active={selected === title}
      style={{ color: colors.gray[100] }}
      onClick={handleItemClick}
    >
      <Typography>{title}</Typography>
      {/* <Link to={to} /> */}
    </MenuItem>
  )
}

Item.propTypes = {
  title: PropTypes.string,
  to: PropTypes.string,
  icon: PropTypes.object,
  selected: PropTypes.string,
  setSelected: PropTypes.func
}

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode)
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [selected, setSelected] = useState("Dashboard")
  const [isNavShown, setIsNavShown] = useState(false)
  const matches = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box
      sx={{
        "& .ps-sidebar-container::-webkit-scrollbar": {
          width: "1px"
        },
        "& .ps-menu-button:hover": {
          color: "#868dfb !important",
          backgroundColor: "transparent !important"
        },
        "& .ps-menu-button.active": {
          color: "#6870fa !important"
        },
        display: "table-cell",
        backgroundColor: `${colors.primary[400]}`,
        position: "relative"
      }}
    >
      {
        isNavShown || !matches ?
          <ProSidebar
            collapsed={matches ? true : isCollapsed}
            backgroundColor={colors.primary[400]}
            rootStyles={{
              border: "none",
              height: "100%",

              [theme.breakpoints.down('md')]: {
                position: "absolute"
              },
            }}>
            <Menu>
              {/* MENU ICON */}

              <MenuItem
                onClick={() => setIsCollapsed(!isCollapsed)}
                icon={isCollapsed ? <MenuOutlinedIcon /> : matches && <MenuOutlinedIcon />}
                style={{
                  margin: "10px 0 20px 0",
                  color: colors.gray[100],
                }}
              >
                {!matches && !isCollapsed && (
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    ml="15px"
                  >
                    <Typography variant="h4" color={colors.gray[100]} textTransform="uppercase">
                      Admin Portal
                    </Typography>
                    <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                      <MenuOutlinedIcon />
                    </IconButton>
                  </Box>
                )}
              </MenuItem>


              {/* USER */}
              {!matches && !isCollapsed && (
                <Box mb="25px">
                  <Box display="flex" justifyContent="center" alignItems="center">
                    <img
                      alt="profile-user"
                      width="100px"
                      height="100px"
                      src={'../../assets/sewawa.jpg'}
                      style={{ cursor: "pointer", borderRadius: "50%" }}
                    />
                  </Box>

                  <Box textAlign="center">
                    <Typography
                      variant="h2"
                      color={colors.gray[100]}
                      fontWeight="bold"
                      sx={{ m: "10px 0 0 0" }}
                    >
                      Ange Val
                    </Typography>
                    <Typography
                      variant="h5"
                      color={colors.greenAccent[500]}
                    >
                      Administrator
                    </Typography>
                  </Box>
                </Box>
              )}

              {/* MENU ITEMS */}
              <Box>
                <Item
                  title="Dashboard"
                  to="/"
                  icon={<HomeOutlinedIcon />}
                  selected={selected}
                  setSelected={setSelected}
                />
                <Typography
                  variant="h6"
                  color={colors.gray[300]}
                  sx={{ m: "15px 0 5px 20px" }}
                >
                  Data
                </Typography>
                <Item
                  title="Manage Team"
                  to="/team"
                  icon={<PeopleOutlinedIcon />}
                  selected={selected}
                  setSelected={setSelected}
                />
                <Item
                  title="Contacts Information"
                  to="/contacts"
                  icon={<ContactsOutlinedIcon />}
                  selected={selected}
                  setSelected={setSelected}
                />
                <Item
                  title="Invoices Balances"
                  to="/invoices"
                  icon={<ReceiptOutlinedIcon />}
                  selected={selected}
                  setSelected={setSelected}
                />
                <Typography
                  variant="h6"
                  color={colors.gray[300]}
                  sx={{ m: "15px 0 5px 20px" }}
                >
                  Pages
                </Typography>
                <Item
                  title="Profile Form"
                  to="/form"
                  icon={<PersonOutlinedIcon />}
                  selected={selected}
                  setSelected={setSelected}
                />
                <Item
                  title="Calendar"
                  to="/calendar"
                  icon={<CalendarTodayOutlinedIcon />}
                  selected={selected}
                  setSelected={setSelected}
                />
                <Item
                  title="FAQ"
                  to="/faq"
                  icon={<HelpOutlinedIcon />}
                  selected={selected}
                  setSelected={setSelected}
                />
                <Typography
                  variant="h6"
                  color={colors.gray[300]}
                  sx={{ m: "15px 0 5px 20px" }}
                >
                  Charts
                </Typography>
                <Item
                  title="Bar Chart"
                  to="/bar"
                  icon={<BarChartOutlinedIcon />}
                  selected={selected}
                  setSelected={setSelected}
                />
                <Item
                  title="Pie Chart"
                  to="/pie"
                  icon={<PieChartOutlineOutlinedIcon />}
                  selected={selected}
                  setSelected={setSelected}
                />
                <Item
                  title="Line Chart"
                  to="/line"
                  icon={<TimelineOutlinedIcon />}
                  selected={selected}
                  setSelected={setSelected}
                />
                <Item
                  title="Geography Chart"
                  to="/geography"
                  icon={<MapOutlinedIcon />}
                  selected={selected}
                  setSelected={setSelected}
                />
              </Box>
            </Menu>
          </ProSidebar> : undefined
      }

      <Box
        position="fixed"
        display="flex"
        alignItems="center"
        justifyContent="center"
        right="3vh"
        top="90vh"
        zIndex="9"
        backgroundColor={colors.greenAccent[500]}
        width="50px"
        height="50px"
        borderRadius="50%"
        sx={{
          [theme.breakpoints.up('md')]: {
            display: "none"
          },
        }}
      >
        <IconButton onClick={() => setIsNavShown(!isNavShown)}>
          <MenuOutlinedIcon />
        </IconButton>
      </Box>
    </Box>
  )
}

export default Sidebar;