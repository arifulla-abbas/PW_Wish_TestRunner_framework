import { test as baseTest } from '../fixtures/pom-fixture';
import CommonUtils from '../utils/CommonUtils';

type CommonFixtures = {
    commonUtils: CommonUtils;
};

export const test = baseTest.extend<CommonFixtures>({
    commonUtils: async ({ }, use) => {
        const commonUtils = new CommonUtils();
        await use(commonUtils);
    }

});