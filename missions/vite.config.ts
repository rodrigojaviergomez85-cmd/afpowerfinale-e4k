import {fileURLToPath} from 'node:url';
export default {
 root:fileURLToPath(new URL('.',import.meta.url)),
 base:'/missions/v1/',
 build:{outDir:'../public/missions/v1',emptyOutDir:true,rollupOptions:{input:['index.html','spotlight.html','day.html','rescue.html','smoothie.html','design-system.html','mission.html'].map(p=>fileURLToPath(new URL(p,import.meta.url)))}}
};
