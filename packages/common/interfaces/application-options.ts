import { ScribblePlugin } from "./scribble-plugin";
import { ScribbleTheme } from "./scribble-theme";

export interface ApplicationOptions {
    plugins?: ScribblePlugin[]
    themes?: ScribbleTheme[]
    host?: string
    port?: number
    name?: string
    sloan?: string
}