import React from "react";
import AppBar from "material-ui/AppBar";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Drawer from "material-ui/Drawer";
import MenuItem from "material-ui/MenuItem";
import "bootstrap/dist/css/bootstrap.min.css";
import Point from "../Placemark/Placemark";
import PolygonEditor from "../Polygon/polygon";
import Route from "../Route/Route";

export class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "React",
      open: false,
      pageNumber: 0
    };
    this.handleDrawerClick = this.handleDrawerClick.bind(this);
    this.handleMenuClick0 = this.handleMenuClick0.bind(this);
    this.handleMenuClick1 = this.handleMenuClick1.bind(this);
    this.handleMenuClick2 = this.handleMenuClick2.bind(this);
  }

  handleMenuClick0() {
    this.setState({ pageNumber: 0 });
    this.handleDrawerClick();
  }

  handleMenuClick1() {
    this.setState({ pageNumber: 1 });
    this.handleDrawerClick();
  }

  handleMenuClick2() {
    this.setState({ pageNumber: 2 });
    this.handleDrawerClick();
  }

  menuControl() {
    if (this.state.pageNumber === 0) {
      return <Point />;
    } else if (this.state.pageNumber === 1) {
      return <PolygonEditor />;
    } else if (this.state.pageNumber === 2) {
      return <Route />;
    }
  }

  handleDrawerClick() {
    if (this.state.open === false) this.setState({ open: true });
    else this.setState({ open: false });
  }
  render() {
    return (
      <div>
        <MuiThemeProvider>
          <AppBar
            title="Яндекс карты"
            onLeftIconButtonClick={this.handleDrawerClick.bind()}
          />
          <Drawer open={this.state.open}>
            <MenuItem onClick={this.handleMenuClick0.bind()}>Метка</MenuItem>
            <MenuItem onClick={this.handleMenuClick1.bind()}>Полигон</MenuItem>
            <MenuItem onClick={this.handleMenuClick2.bind()}>Маршрут</MenuItem>
          </Drawer>
        </MuiThemeProvider>
        {this.menuControl()}
      </div>
    );
  }
}

export default Header;
