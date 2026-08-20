import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;

if (!uri) {
  throw new Error("MONGODB_URI 환경 변수가 설정되지 않았습니다.");
}

declare global {
  // eslint-disable-next-line no-var
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

let clientPromise: Promise<MongoClient>;

if (process.env.NODE_ENV === "development") {
  if (!global._mongoClientPromise) {
    global._mongoClientPromise = new MongoClient(uri).connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  clientPromise = new MongoClient(uri).connect();
}

export const CLICKS_DB_NAME = "linknamu";
export const CLICKS_COLLECTION_NAME = "clicks";

export type ClickDocument = {
  _id: string;
  count: number;
};

export async function getClicksCollection() {
  const client = await clientPromise;
  return client
    .db(CLICKS_DB_NAME)
    .collection<ClickDocument>(CLICKS_COLLECTION_NAME);
}

export default clientPromise;
