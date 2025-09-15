import {
  ANYONE_CAN,
  ExpressionBuilder,
  PermissionsConfig,
  type Row,
  definePermissions,
  Schema as ZeroSchema,
} from '@rocicorp/zero';
import {schema as genSchema} from './schema.gen';
import { AuthData } from '@/types/auth';

// Define a minimal user table for the relationship reference
// Assuming 'user' table exists and has an 'id' primary key of type string.


export const schema = {
  ...genSchema,
  enableLegacyMutators: false,
} as const satisfies ZeroSchema;

export type Schema = typeof schema;
export type Task = Row<typeof schema.tables.tasks>;
export type User = Row<typeof schema.tables.user>;

const allowIfTaskOwner = (
  authData: AuthData,
  {cmp}: ExpressionBuilder<Schema, 'tasks'>,
) => {
  // You can see a task if you are its owner.
  return cmp('userId', authData.user.id);
};

export const permissions = definePermissions<AuthData, Schema>(schema, () => {
  return {
    tasks: {
      row: {
        select: [allowIfTaskOwner],
        insert: ANYONE_CAN,
        update: {
          preMutation: [allowIfTaskOwner],
        },
        delete: [allowIfTaskOwner],
      },
    },
    user: {
      row: {
        select: ANYONE_CAN,
        insert: ANYONE_CAN,
        update: {
          preMutation: ANYONE_CAN,
        },
        delete: ANYONE_CAN,
      },
    },
  };
});