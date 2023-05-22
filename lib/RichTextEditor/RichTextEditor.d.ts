/// <reference types="react" />
import { InputBaseComponentProps } from '@mui/material';
export interface BaseRichTextEditorProps extends Omit<InputBaseComponentProps, 'onChange'> {
    /**
     * Allow multiline editing, false to disable multiline
     */
    multiline?: boolean;
    /**
     * Number of rows for multiline editing
     */
    rows?: number;
    onChange?: (e: Event | null, value: InputBaseComponentProps['value']) => void;
}
export interface RichTextEditorClassicProps extends BaseRichTextEditorProps {
    variant?: 'classic';
}
export interface RichTextEditorInlineProps extends BaseRichTextEditorProps {
    variant: 'inline';
}
export interface RichTextEditorBallonProps extends BaseRichTextEditorProps {
    variant: 'balloon';
}
export interface RichTextEditorBallonBlockProps extends BaseRichTextEditorProps {
    variant: 'balloonBlock';
}
export interface RichTextEditorDecoupledProps extends BaseRichTextEditorProps {
    variant: 'decoupled';
}
export declare type RichTextEditorProps = RichTextEditorClassicProps | RichTextEditorBallonProps | RichTextEditorBallonBlockProps | RichTextEditorDecoupledProps | RichTextEditorInlineProps;
export declare const RichTextEditor: import("react").ForwardRefExoticComponent<(Omit<RichTextEditorClassicProps, "ref"> | Omit<RichTextEditorInlineProps, "ref"> | Omit<RichTextEditorBallonProps, "ref"> | Omit<RichTextEditorBallonBlockProps, "ref"> | Omit<RichTextEditorDecoupledProps, "ref">) & import("react").RefAttributes<unknown>>;
export default RichTextEditor;
