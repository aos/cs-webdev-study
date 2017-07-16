/**
 * Sharding -- horizontal scaling

Each shard can be a replica set

'mongos' router distributes to each shard

Range based approach (shard key)

Sharding is done at a database level

Split data up from a particular collection

Choosing a shard key:
1. Sufficient cardinality (lots of values)
2. Avoid hotspotting writes (monotonically increasing)


**/

