import axios from "axios";
import { For, createSignal, onMount } from "solid-js";
import { css } from "solid-styled";

// 外で定義できるのいいね見やすい
const fetchArticles = async () =>
  await axios.get(
    "https://shibe.online/api/shibes?count=6&urls=true&httpsUrls=true"
  );

export default function Article() {
  const [article, setArticle] = createSignal(null);

  // 外にもかけるっぽい
  css`
    button {
      font-family: inherit;
      font-size: inherit;
      padding: 1em 2em;
      color: #335d92;
      border-radius: 2em;
      border: 2px solid rgba(68, 107, 158, 0);
      outline: none;
      width: 200px;
      font-variant-numeric: tabular-nums;
    }

    button:focus {
      border: 2px solid #335d92;
    }

    #article {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      gap: 8px;
    }

    img {
      width: 49%;
    }
  `;

  onMount(async () => {
    setArticle((await fetchArticles()).data);
    console.log(article());
  });

  return (
    <div id="article">
      <For each={article()} fallback={<p>Loading...</p>}>
        {(article) => <img src={article} />}
      </For>
    </div>
  );
}
