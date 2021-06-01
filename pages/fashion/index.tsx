import { PageTemplate } from "../../components/common/template/PageTemplate";
import {
  LinkFashion,
  LinkHome,
  NAME_FASHION,
} from "../../src/constants/pageInfo";

export default () => (
  <PageTemplate title={NAME_FASHION} links={[LinkHome, LinkFashion]}>
    test
  </PageTemplate>
);
