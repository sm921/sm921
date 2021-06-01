import { Carousel } from "react-bootstrap";
import {
  NAME_FASHION,
  NAME_PROGRAMMING,
  URL_FASHION,
  URL_PROGRAMMING,
} from "../../../src/constants/pageInfo";
import { HolderjsImg } from "../../common/Holder";
import Link from "next/link";

export const Pages = () => (
  <Carousel>
    <Carousel.Item>
      <PageCard
        h1={NAME_PROGRAMMING}
        h2="AI | CG | C++ RUST | WEB | TypeScript | React | Security | Science"
        description="とってもエキサイティングなプログラミングのノート"
        link={URL_PROGRAMMING}
      ></PageCard>
    </Carousel.Item>
    <Carousel.Item>
      <PageCard
        h1={NAME_FASHION}
        h2="パターンメイキング | 縫製 | CAD | レーザーカッター"
        description="ファッションって、「自由」のこと"
        link={URL_FASHION}
      ></PageCard>
    </Carousel.Item>
  </Carousel>
);

/**
 * @private
 */
interface PageCardProps {
  h1: string;
  h2?: string;
  description?: string;
  link: string;
}
/**
 * @private
 */
const PageCard = (props: PageCardProps) => (
  <>
    <HolderjsImg text={props.h1}></HolderjsImg>
    <Carousel.Caption>
      <Link href={props.link}>
        <p>{props.h2 ?? ""}</p>
      </Link>
      <Link href={props.link}>{props.description ?? ""}</Link>
    </Carousel.Caption>
  </>
);
