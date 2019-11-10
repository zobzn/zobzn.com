import React, { useState, useEffect } from "react";
import Link from "../components/link";
import Head from "../components/head";
import Layout from "../components/layout";
// import SEO from "../components/seo";
import useSpeechSynthesis from "../lib/useSpeechSynthesis";
import ZbzButton from "../components/zbz-button";

function loadPhrases() {
  return import(
    /* webpackChunkName: "english-phrases" */ "raw-loader!../data/english-phrases.txt"
  ).then(({ default: fileContent }) => {
    return fileContent.trim().split("\n");
  });
}

const phrases = require("raw-loader!../data/english-phrases.txt")
  .default.trim()
  .split("\n");

const sample = arr =>
  arr.length > 0
    ? arr[Math.floor(Math.random() * arr.length)].replace(/^[-\s]+/, "")
    : null;

// @see https://eeejay.github.io/webspeechdemos/
// @see https://github.com/eeejay/webspeechdemos

// @see https://responsivevoice.org/
// @see https://github.com/MikeyParton/react-speech-kit

// @see https://text-to-speech-demo.ng.bluemix.net/

// @see https://www.acapela-group.com/

// @see https://azure.microsoft.com/en-us/services/cognitive-services/text-to-speech/
// @see https://aws.amazon.com/polly/
// @see https://www.ibm.com/watson/services/text-to-speech/
// @see https://cloud.google.com/text-to-speech/

function useEnglishSpeaker() {
  const {
    voices,
    speak,
    cancel: cancelSpeak,
    speaking: isSpeaking
  } = useSpeechSynthesis();

  let prefferedVoices = [];
  prefferedVoices = prefferedVoices.length
    ? prefferedVoices
    : voices.filter(
        voice => voice.lang === "en-US" && voice.name.match(/Microsoft Zira/i)
      );
  prefferedVoices = prefferedVoices.length
    ? prefferedVoices
    : voices.filter(
        voice => voice.lang === "en-US" && voice.name.match(/Microsoft Mark/i)
      );
  prefferedVoices = prefferedVoices.length
    ? prefferedVoices
    : voices.filter(
        voice => voice.lang === "en-US" && voice.name.match(/Microsoft David/i)
      );
  prefferedVoices = prefferedVoices.length
    ? prefferedVoices
    : voices.filter(voice => voice.lang === "en-US" && voice.default === true);
  prefferedVoices = prefferedVoices.length
    ? prefferedVoices
    : voices.filter(voice => voice.lang === "en-US");
  prefferedVoices = prefferedVoices.length
    ? prefferedVoices
    : voices.filter(
        voice => voice.lang.match(/^en-/i) && voice.default === true
      );
  prefferedVoices = prefferedVoices.length
    ? prefferedVoices
    : voices.filter(voice => voice.lang.match(/^en-/i));

  const voice = prefferedVoices.length > 0 ? prefferedVoices[0] : null;

  return voice
    ? [isSpeaking, speak, cancelSpeak, voice, voices]
    : [false, () => {}, () => {}, null, []];
}

export default () => {
  const [phrase, setPhrase] = useState("");
  const [isSpeaking, speak, cancelSpeak, voice, voices] = useEnglishSpeaker();

  useEffect(() => {
    setPhrase(sample(phrases));
  }, []);

  function handleMore() {
    isSpeaking && cancelSpeak();

    setPhrase(sample(phrases));
  }

  function handlePronounce() {
    isSpeaking && cancelSpeak();

    voice &&
      speak &&
      phrase &&
      speak({
        text: phrase,
        voice: voice
      });
  }

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
        {voice && (
          <ZbzButton onClick={handlePronounce} title={voice.name}>
            <span role="img" aria-label="play">
              🔊
            </span>
          </ZbzButton>
        )}
        <ZbzButton onClick={handleMore}>Еще…</ZbzButton>
      </div>
    </Layout>
  );
};
