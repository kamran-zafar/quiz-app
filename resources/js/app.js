import './bootstrap';
import {createApp} from 'vue';
import Survey from './components/Survey.vue';
import Quiz from './components/Quiz.vue';

// Survey.js imports
import {SurveyComponent, PopupSurveyComponent} from 'survey-vue3-ui';
import 'survey-core/survey-core.css';

const app = createApp({});

// Register your custom components
app.component('Survey', Survey);
app.component('Quiz', Quiz);

// Register Survey.js components globally
app.component('SurveyComponent', SurveyComponent);
app.component('PopupSurveyComponent', PopupSurveyComponent);

app.mount('#app');
