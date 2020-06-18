import React, { Component } from 'react'
import Link from './Link'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'

const FEED_QUERY = gql`
  {
    feed {
      links {
        id
        createdAt
        url
        description
        postedBy {
          id
          name
        }
        votes {
          id
          user {
            id
          }
        }
      }
    }
  }
`

export default class LinksList extends Component {
  render() {
    return (
      <Query query={FEED_QUERY}>
        {({ loading, data, error }) => {
          if (loading) return <div>Loading...</div>
          if (error) return <div>Error: ${error}</div>
          const linksToRender = data.feed.links;

          return linksToRender.map(
            (link, index) => <Link key={link.id} link={link} index={index} />
            )
        }}
      </Query>
    )
  }
}
