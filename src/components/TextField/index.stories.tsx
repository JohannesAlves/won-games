import { Story, Meta } from "@storybook/react/types-6-0";
import TextField from ".";
import { TextFieldProps } from "./types";
import React from "react";
import { Email } from "styled-icons/material-outlined";

export default {
    title: "Form/TextField",
    component: TextField,
    args: {
        label: "E-mail",
        name: "email",
        initialValue: "",
        placeholder: "john.cage@gmail.com",
    },
    argTypes: {
        onInput: { action: "changed" },
    },
} as Meta;

export const Default: Story<TextFieldProps> = (args) => (
    <div style={{ maxWidth: 300, padding: 15 }}>
        <TextField {...args} />
    </div>
);

export const withIcon: Story<TextFieldProps> = (args) => (
    <div style={{ maxWidth: 300, padding: 15 }}>
        <TextField {...args} hasIcon={<Email />} />
    </div>
);

export const iconToRight: Story<TextFieldProps> = (args) => (
    <div style={{ maxWidth: 300, padding: 15 }}>
        <TextField {...args} hasIcon={<Email />} iconToRight />
    </div>
);

export const withError: Story<TextFieldProps> = (args) => (
    <div style={{ maxWidth: 300, padding: 15 }}>
        <TextField {...args} hasIcon={<Email />} error="Ops... something wrong" />
    </div>
);
