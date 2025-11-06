import { createDirectus, rest, staticToken } from '@directus/sdk';

const client = createDirectus('https://cms.asterium.uz')
  .with(staticToken('BmM_BEzghdi0Cd9mZ2lKenn83Kvm3tJg'))
  .with(rest());

export default client;
