import {configure} from '@storybook/react';
import React, {Component} from "react";

const req = require.context('../src/components/commons', true, /\.stories\.js$/)

function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module);
