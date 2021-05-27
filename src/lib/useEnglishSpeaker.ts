import useSpeechSynthesis from "./useSpeechSynthesis";

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

const getVoicesByDefault = () => (voices) =>
  voices.filter((voice) => voice.default === true);

const getVoicesByLang = (lang) => (voices) =>
  voices.filter((voice) => voice.lang === lang);

const getVoicesByLangPrefix = (prefix) => (voices) =>
  voices.filter((voice) => voice.lang.match(new RegExp("^" + prefix, "i")));

const voicesByNameRegexp = (name) => (voices) =>
  voices.filter((voice) => voice.name.match(new RegExp(name, "i")));

const findEnUsByName = (voices, name) =>
  voicesByNameRegexp(name)(getVoicesByLang("en-US")(voices));

const findEnUsAny = (voices) => getVoicesByLang("en-US")(voices);
const findEnGbAny = (voices) => getVoicesByLang("en-GB")(voices);
const findEnAuAny = (voices) => getVoicesByLang("en-AU")(voices);
const findEnAny = (voices) => getVoicesByLangPrefix("en-")(voices);

const findEnUsDefault = (voices) => getVoicesByDefault()(findEnUsAny(voices));
const findEnDefault = (voices) => getVoicesByDefault()(findEnAny(voices));

export default function useEnglishSpeaker() {
  const { voices, speak, cancel, speaking: isSpeaking } = useSpeechSynthesis();

  const preffered = []
    .concat(findEnUsByName(voices, "Google US English"))
    .concat(findEnUsByName(voices, "Google UK English Female"))
    .concat(findEnUsByName(voices, "Google UK English Male"))
    .concat(findEnUsByName(voices, "Microsoft Zira"))
    .concat(findEnUsByName(voices, "Microsoft Mark"))
    .concat(findEnUsByName(voices, "Microsoft David"))
    .concat(findEnUsDefault(voices))
    .concat(findEnUsAny(voices))
    .concat(findEnGbAny(voices))
    .concat(findEnAuAny(voices))
    .concat(findEnDefault(voices))
    .concat(findEnAny(voices));

  const voice = preffered.shift();

  const speakEnglishMatherFucker = (opts) => speak({ ...opts, voice });

  return voices && voice && speak && cancel
    ? { isSpeaking, voice, voices, speak: speakEnglishMatherFucker, cancel }
    : {
        isSpeaking: false,
        voice: null,
        voices: [],
        speak: () => {
          // do nothing
        },
        cancel: () => {
          // do nothing
        },
      };
}
