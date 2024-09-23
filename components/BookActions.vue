<template>
  <ul class="list">
    <li class="square quiz">アプリ学習</li>
    <li class="square test">テスト</li>
    <li class="square sound">音声(無料）</li>
    <li class="square sw">SWトレ</li>
    <li class="square vocab">単語一覧</li>
    <li class="square marksheet">マークシート</li>
    <li class="square record">学習記録</li>
  </ul>
</template>

<style scoped>
.list {
  background: #eee;
  display: flex;
  flex-wrap: wrap;

  gap: 35px;
  padding: 20px 32px;
  max-width: 450px;
}

.square {
  background: white;
  border-radius: 5px;

  font-size: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
  gap: 5px;

  padding-bottom: 5px;
  height: 70px;
  width: 70px;
}

.square::before {
  content: '';
  display: block;
  height: 40px;
  width: 40px;
}

.marksheet::before {
  background: url('~/assets/icon/light/icon_study_marksheet.svg');
}

.quiz::before {
  background: url('~/assets/icon/light/icon_study_quiz.svg');
}

.record::before {
  background: url('~/assets/icon/light/icon_study_record.svg');
}

.sound::before {
  background: url('~/assets/icon/light/icon_study_sound.svg');
}

.sw::before {
  background: url('~/assets/icon/light/icon_study_sw.svg');
}

.test::before {
  background: url('~/assets/icon/light/icon_study_test.svg');
}

.vocab::before {
  background: url('~/assets/icon/light/icon_study_vocab.svg');
}

@media (prefers-color-scheme: dark) {
  .list {
    background: #444;
  }

  .square {
    background: #222;
    border: 1px solid #777;
    color: white;
  }

  .marksheet::before {
    background: url('~/assets/icon/dark/icon_study_marksheet.svg');
  }

  .quiz::before {
    background: url('~/assets/icon/dark/icon_study_quiz.svg');
  }

  .record::before {
    background: url('~/assets/icon/dark/icon_study_record.svg');
  }

  .sound::before {
    background: url('~/assets/icon/dark/icon_study_sound.svg');
  }

  .sw::before {
    background: url('~/assets/icon/dark/icon_study_sw.svg');
  }

  .test::before {
    background: url('~/assets/icon/dark/icon_study_test.svg');
  }

  .vocab::before {
    background: url('~/assets/icon/dark/icon_study_vocab.svg');
  }
}
</style>
