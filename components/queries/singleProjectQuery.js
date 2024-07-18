export const query = `query getProjectBySlug($slug: String) {
  project(filter: {slug: {eq: $slug}}) {
    headline
    summary(markdown: false)
    thumbnailImage
    thumbnailVideo
    items {
      classes
      section {
        ... on TextRecord {
          textClasses
          content(markdown: false)
          _modelApiKey
        }
        ... on ImageRecord {
          _modelApiKey
          imageClasses
          url
          fileInfo
        }
        ... on VideoRecord {
          poster
          ratio
          url
          videoClasses
          videoType
          _modelApiKey
        }
        ... on EmbedRecord {
          content(markdown: false)
          embedClasses
          _modelApiKey
        }
        ... on ImageCompareRecord {
          urlLeft
          urlRight
          imageCompareClasses
          _modelApiKey
        }
        ... on CarouselRecord {
          _modelApiKey
          images {
            image
          }
          slidesPerBreakpoint
          carouselClasses
        }
      }
    }
    role
    slug
    client
    title
    awards
    id
  }
  allProjects {
    client
    slug
    title
    thumbnailImage
    thumbnailVideo
    id
  }
}`;
