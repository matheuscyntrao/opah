
import { Users } from "./Users";


class DataproviderTests {
    dataProvider = new Dataprovider(Users);
    user: Users = this.dataProvider.convertToModel<Users>(Users);
}
