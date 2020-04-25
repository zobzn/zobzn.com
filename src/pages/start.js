import React, { useEffect, useState } from "react";
import Head from "../components/head";
import Layout from "../components/layout";
import ZbzButton from "../components/zbz-button";
import useEnglishSpeaker from "../lib/useEnglishSpeaker";

const phrases = require("../data/english-phrases.txt")
  .default.trim()
  .split("\n");

const sample = (arr) =>
  arr.length > 0
    ? arr[Math.floor(Math.random() * arr.length)].replace(/^[-\s]+/, "")
    : null;

const compareByField = (field, isPositive = 1) => (a, b) => {
  if (a[field] < b[field]) {
    return -1 * isPositive;
  } else if (a[field] > b[field]) {
    return 1 * isPositive;
  } else {
    return 0 * isPositive;
  }
};

export default function StartPage() {
  const [phrase, setPhrase] = useState("");
  const { speak, cancel, voice, voices } = useEnglishSpeaker();

  useEffect(() => {
    setPhrase(sample(phrases));
  }, []);

  const handleMore = () => {
    cancel();
    setPhrase(sample(phrases));
  };

  const handlePronounce = () => {
    cancel();
    speak({
      text: phrase,
    });
  };

  const handleAlertAllVoices = () => {
    alert(
      voices
        .sort(compareByField("lang"))
        .map((voice) => `${voice.lang} - ${voice.name}`)
        .join("\n")
    );
  };

  return (
    <Layout>
      <Head>
        <title>ы</title>
      </Head>
      <div className="app-body">
        <div style={{ margin: "auto", fontSize: "2em" }}>
          <span>{phrase}</span>
        </div>
      </div>
      <div className="app-foot" style={{ textAlign: "right" }}>
        {false && !!voices.length && (
          <ZbzButton onClick={handleAlertAllVoices}>
            <span role="img" aria-label="list">
              🐘
            </span>
          </ZbzButton>
        )}
        {voice && (
          <ZbzButton onClick={handlePronounce}>
            <span role="img" aria-label="play">
              🔊
            </span>
          </ZbzButton>
        )}
        <ZbzButton onClick={handleMore}>Еще…</ZbzButton>
      </div>
    </Layout>
  );
}
