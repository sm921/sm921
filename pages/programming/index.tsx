import { PageTemplate } from "../../components/common/template/PageTemplate";
import {
  LinkHome,
  LinkProgramming,
  NAME_PROGRAMMING,
} from "../../src/constants/pageInfo";

export default () => (
  <PageTemplate title={NAME_PROGRAMMING} links={[LinkHome, LinkProgramming]}>
    test
  </PageTemplate>
);
