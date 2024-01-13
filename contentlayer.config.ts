import {
  defineDocumentType,
  makeSource,
  ComputedFields,
} from "contentlayer/source-files"; 
import rehypeSlug from "rehype-slug";
import rehypePrism from "rehype-prism-plus";

// import 
import remarkMath from "remark-math";

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
  filePathPattern: `blog/**/*.mdx`, // onde fica o arquivo
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
    resolve: (doc) => `/projects/${getSlug(doc)}/image.png`,
  },
};

export const Project = defineDocumentType(() => ({
  name: "Project",
  filePathPattern: `project/**/*.mdx`,
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
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
    remarkPlugins: [remarkMath],
    },
});
