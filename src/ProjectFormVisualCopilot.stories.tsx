// ProjectForm.stories.tsx

import type { Meta, StoryObj } from '@storybook/react';
import ProjectForm from './ProjectFormVisualCopilot.tsx';
import { action } from '@storybook/addon-actions';

const meta = {
    component: ProjectForm,
    argTypes: {
        showProjectLead: { control: 'boolean' },
        onDelete: { action: 'deleted' },
        onReset: { action: 'reset' },
        onSave: { action: 'saved' },
    },
} satisfies Meta<typeof ProjectForm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {
    args: {
        showProjectLead: true,
        onDelete: action('onDelete'),
        onReset: action('onReset'),
        onSave: action('onSave'),
    },
} satisfies Story;

export const WithoutProjectLead = {
    args: {
        showProjectLead: false,
        onDelete: action('onDelete'),
        onReset: action('onReset'),
        onSave: action('onSave'),
    },
} satisfies Story;
