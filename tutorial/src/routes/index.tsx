import { Title } from "solid-start";
import Counter from "~/components/Counter";
import Article from "~/features/article/components/article";
export default function Home() {
  return (
    <main>
      <Title>Hello World</Title>
      <h1>WAN CHAN!</h1>
      <Article />
      <Counter />
      <p>
        Visit{" "}
        <a href="https://start.solidjs.com" target="_blank">
          start.solidjs.com
        </a>{" "}
        to learn how to build SolidStart apps.
      </p>
    </main>
  );
}
