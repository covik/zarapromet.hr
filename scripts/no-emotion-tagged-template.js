import { ESLintUtils } from '@typescript-eslint/utils';

const createRule = ESLintUtils.RuleCreator(
    () => 'https://example.com/no-emotion-template-literals',
);

const noEmotionTemplateLiterals = createRule({
    name: 'no-emotion-template-literals',
    meta: {
        type: 'problem',
        docs: {
            description:
                'Disallow tagged template literals with styled and css in Emotion',
        },
        messages: {
            noTemplateLiterals:
                'Avoid using tagged template literals with Emotion {{ functionName }}. Use object notation instead.',
        },
        schema: [],
    },
    defaultOptions: [],
    create(context) {
        return {
            TaggedTemplateExpression(node) {
                if (
                    node.tag &&
                    node.tag.type === 'Identifier' &&
                    (node.tag.name === 'styled' || node.tag.name === 'css')
                ) {
                    context.report({
                        node,
                        messageId: 'noTemplateLiterals',
                        data: {
                            functionName: node.tag.name,
                        },
                    });
                }

                if (
                    node.tag &&
                    node.tag.type === 'MemberExpression' &&
                    node.tag.object.type === 'Identifier' &&
                    node.tag.object.name === 'styled'
                ) {
                    context.report({
                        node,
                        messageId: 'noTemplateLiterals',
                        data: {
                            functionName: 'styled',
                        },
                    });
                }
            },
        };
    },
});

export default {
    rules: {
        'no-emotion-template-literals': noEmotionTemplateLiterals,
    },
};
