import { useEffect } from "react";

declare namespace Holder {
  function run(props: {
    /** id of img elements to apply holderjs */
    images: string;
  }): void;
}

export const HolderjsImg = (props: {
  width?: number;
  height?: number;
  text?: string;
}) => (
  <img
    id="holderjs-img"
    className="d-block w-100"
    src={`holder.js/${props.width ?? 800}x${props.height ?? 400}?text=${
      props.text ?? "_"
    }&bg=373940`}
    alt={props.text}
  />
);

export const Holderjs = () => {
  useEffect(() => {
    Holder.run({
      images: "#holderjs-img",
    });
  });
  return (
    <script
      src="https://cdnjs.cloudflare.com/ajax/libs/holder/2.9.7/holder.min.js"
      integrity="sha512-O6R6IBONpEcZVYJAmSC+20vdsM07uFuGjFf0n/Zthm8sOFW+lAq/OK1WOL8vk93GBDxtMIy6ocbj6lduyeLuqQ=="
      crossOrigin="anonymous"
      referrerPolicy="no-referrer"
    ></script>
  );
};
