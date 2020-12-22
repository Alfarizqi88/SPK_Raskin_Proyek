/*!

=========================================================
* Black Dashboard React v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "views/Dashboard.js";
import Icons from "views/Icons.js";
import Map from "views/Map.js";
import Notifications from "views/Notifications.js";
import Rtl from "views/Rtl.js";
import TableList from "views/TableList.js";
import Typography from "views/Typography.js";
import UserProfile from "views/UserProfile.js";
import Mefp from "views/Mefp.js";
import Saw from "views/Saw.js";
import Tambah_Kriteria from "views/Tambah_Kriteria.js";
import Tambah_Alternatif from "views/Tambah_Alternatif.js";
import Tambah_Sub_Kriteria from "views/Tambah_Sub_Kriteria.js";
import Tambah_Data_Awal from "views/TambahDataAwal";
var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-chart-pie-36",
    component: Dashboard,
    layout: "/admin"
  },  
  {
    path: "/Tambah_Kriteria",
    name: "Tambah_Kriteria",
    rtlName: "ملف تعريفي للمستخدم",
    icon: "tim-icons icon-simple-add",
    component: Tambah_Kriteria,
    layout: "/admin"
  },
  {
    path: "/Tambah_Sub_Kriteria",
    name: "Tambah_Sub_Kriteria",
    rtlName: "ملف تعريفي للمستخدم",
    icon: "tim-icons icon-simple-add",
    component: Tambah_Sub_Kriteria,
    layout: "/admin"
  },
  {
    path: "/Tambah_Alternatif",
    name: "Tambah_Alternatif",
    rtlName: "ملف تعريفي للمستخدم",
    icon: "tim-icons icon-simple-add",
    component: Tambah_Alternatif,
    layout: "/admin"
  },
  {
    path: "/Tambah_Data_Awal",
    name: "Tambah_Data_Awal",
    rtlName: "ملف تعريفي للمستخدم",
    icon: "tim-icons icon-simple-add",
    component: Tambah_Data_Awal,
    layout: "/admin"
  },
  {
    path: "/Mefp",
    name: "MFEP",
    rtlName: "ملف تعريفي للمستخدم",
    icon: "tim-icons icon-puzzle-10",
    component: Mefp,
    layout: "/admin"
  },
  {
    path: "/Saw",
    name: "Saw",
    rtlName: "ملف تعريفي للمستخدم",
    icon: "tim-icons icon-puzzle-10",
    component: Saw,
    layout: "/admin"
  },
  {
    path: "/user-profile",
    name: "User Profile",
    rtlName: "ملف تعريفي للمستخدم",
    icon: "tim-icons icon-single-02",
    component: UserProfile,
    layout: "/admin"
  }

];
export default routes;
