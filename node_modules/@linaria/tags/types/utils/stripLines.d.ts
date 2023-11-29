import type { Location } from '../types';
export default function stripLines(loc: {
    end: Location;
    start: Location;
}, text: string | number): string;
