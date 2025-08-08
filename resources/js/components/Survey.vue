<script setup lang="ts">
import {ref} from 'vue';
import {Model} from 'survey-core';

const surveyJson = {
    pages: [
        {
            name: "PersonalDetails",
            elements: [
                {
                    type: "text",
                    name: "FirstName",
                    title: "Enter your first name:"
                },
                {
                    type: "text",
                    name: "LastName",
                    title: "Enter your last name:"
                },
                {
                    type: "panel",
                    name: "Contacts",
                    state: "collapsed",
                    title: "Contacts (optional)",
                    elements: [
                        {
                            type: "text",
                            name: "Telegram",
                            title: "Telegram:"
                        },
                        {
                            type: "text",
                            name: "GitHub",
                            title: "GitHub username:"
                        }
                    ]
                }
            ]
        }
    ]
};

const survey = ref(new Model(surveyJson));
</script>

<template>
    <SurveyComponent :model="survey"/>
</template>
