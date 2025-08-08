<script setup lang="ts">
import {Model} from 'survey-core';
import {SurveyComponent, PopupSurveyComponent} from "survey-vue3-ui";
import 'survey-core/survey-core.css';

const surveyJson = {
    pages: [{
        name: "PersonalDetails",
        elements: [{
            type: "text",
            name: "FirstName",
            title: "Enter your first name:"
        }, {
            type: "text",
            name: "LastName",
            title: "Enter your last name:"
        }, {
            type: "panel",
            name: "Contacts",
            state: "collapsed",
            title: "Contacts (optional)",
            elements: [{
                type: "text",
                name: "Telegram",
                title: "Telegram:"
            }, {
                type: "text",
                name: "GitHub",
                title: "GitHub username:"
            }]
        }]
    }]
};
const survey = new Model(surveyJson);
survey.focusFirstQuestionAutomatic = false;

document.addEventListener("DOMContentLoaded", function () {
    survey.render("surveyContainer");
});
</script>

<template>
    <!-- Render the survey inside the page -->
    <SurveyComponent :model="survey"/>

    <!-- Render the survey in a pop-up window -->
    <PopupSurveyComponent :model="survey" :isExpanded="true"/>
</template>
