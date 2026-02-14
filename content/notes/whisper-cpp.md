---
title: whisper.cpp — локальная транскрипция аудио
date: "2025-07-15"
---

[whisper.cpp](https://github.com/ggerganov/whisper.cpp) — это реализация модели Whisper от OpenAI на C/C++, которая позволяет транскрибировать аудио локально без отправки данных в облако.

## Установка

```bash
brew install whisper-cpp
```

## Модели

Модели различаются по размеру, скорости работы и качеству распознавания:

- `tiny` — самая быстрая, низкое качество (~75 MB)
- `base` — быстрая, приемлемое качество (~142 MB)
- `small` — хороший баланс (~466 MB)
- `medium` — высокое качество (~1.5 GB)
- `large-v1` — отличное качество (~2.9 GB)
- `large-v2` — улучшенная версия (~2.9 GB)
- `large-v3` — новейшая, лучшее качество (~2.9 GB)
- `large-v3-turbo` — меньше размер и быстрее, но чуть хуже качество (~1.6 GB)

## Загрузка моделей

Модели скачиваются с Hugging Face:

```bash
mkdir -p ~/Downloads/whisper-cpp-models

curl -L -o ~/Downloads/whisper-cpp-models/ggml-large-v3.bin \
  https://huggingface.co/ggerganov/whisper.cpp/resolve/main/ggml-large-v3.bin
```

Список всех доступных моделей: https://huggingface.co/ggerganov/whisper.cpp/tree/main

## Использование

Базовая транскрипция с автоопределением языка:

```bash
whisper-cli --threads 8 --processors 8 --language auto \
  --model ~/Downloads/whisper-cpp-models/ggml-large-v3.bin \
  --file ~/Downloads/audio-1.mp3 \
  --output-txt --output-file ~/Downloads/audio-1
```

После выполнения команды в директории `~/Downloads/` появится файл `audio-1.txt` с транскрипцией.

## Основные параметры

- `--model` — путь к файлу модели
- `--file` — путь к аудиофайлу (поддерживаются mp3, wav, m4a и другие)
- `--language auto` — автоопределение языка (или `ru`, `en` для конкретного языка; если язык известен заранее, лучше указать явно — это ускорит распознавание)
- `--threads` — количество потоков CPU
- `--processors` — количество процессоров
- `--output-txt` — сохранить как текстовый файл
- `--output-srt` — сохранить как субтитры SRT
- `--output-vtt` — сохранить как субтитры WebVTT
- `--output-file` — путь для сохранения результата (без расширения)

## Форматы вывода

whisper.cpp поддерживает различные форматы:

```bash
# Только текст
whisper-cli --model model.bin --file audio.mp3 --output-txt

# Субтитры SRT (с таймкодами)
whisper-cli --model model.bin --file audio.mp3 --output-srt

# Субтитры VTT
whisper-cli --model model.bin --file audio.mp3 --output-vtt

# JSON с полной информацией
whisper-cli --model model.bin --file audio.mp3 --output-json
```

