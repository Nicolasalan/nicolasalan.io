import {
  defineDocumentType,
  makeSource,
  ComputedFields,
} from "contentlayer/source-files"; 
import rehypePrism from "rehype-prism-plus";
import rehypeSlug from "rehype-slug";

const getSlug = (doc: any) => doc._raw.sourceFileName.replace(/\.mdx$/, "");

const postComputedFields: ComputedFields = {
  slug: {
    type: "string",
    resolve: (doc) => getSlug(doc),
  },
  image: {
    type: "string",
    resolve: (doc) => `/blog/${getSlug(doc)}/image.jpeg`,
  },
  og: {
    type: "string",
    resolve: (doc) => `/blog/${getSlug(doc)}/image.jpeg`,
  },
};

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `blog/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    summary: { type: "string", required: true },
    publishedAt: { type: "string", required: true },
    updatedAt: { type: "string", required: false },
    tags: { type: "json", required: false },
    featured: { type: "boolean", required: false },
    shortTitle : { type: "string", required: false, default: ""},
  },
  computedFields: postComputedFields,
}));

const projectComputedFields: ComputedFields = {
  slug: {
    type: "string",
    resolve: (doc) => getSlug(doc),
  },
  image: {
    type: "string",
    resolve: (doc) => `/projects/${getSlug(doc)}/model.png`,
  },
};

export const Project = defineDocumentType(() => ({
  name: "Project",
  filePathPattern: `project/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    description: { type: "string", required: true },
    time: { type: "string", required: true },
    url: { type: "string", required: false },
    tags: { type: "json", required: false },
  },
  computedFields: projectComputedFields,
}));

export default makeSource({
  contentDirPath: "content",
  documentTypes: [Post, Project],
  mdx: {
    rehypePlugins: [rehypePrism, rehypeSlug],
  },
});
