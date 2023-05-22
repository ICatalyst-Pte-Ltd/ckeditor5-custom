import ClassicEditor from './ClassicEditor';
export declare const defaultPlugins: typeof ClassicEditor.builtinPlugins;
export declare const defaultConfig: {
    toolbar: {
        items: string[];
    };
    list: {
        properties: {
            styles: boolean;
            startIndex: boolean;
            reversed: boolean;
        };
    };
    language: string;
};
export declare const baseEditorConfiguration: {
    plugins: import("@ckeditor/ckeditor5-core").PluginConstructor<import("@ckeditor/ckeditor5-core").Editor>[];
    toolbar: {
        toolbar: {
            items: string[];
        };
        list: {
            properties: {
                styles: boolean;
                startIndex: boolean;
                reversed: boolean;
            };
        };
        language: string;
    };
};
