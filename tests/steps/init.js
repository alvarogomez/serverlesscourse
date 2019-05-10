module.exports.init = () => {
  process.env.AWS_REGION = "eu-west-1";
  process.env.getTogethersTableName = `${process.env.TEST_STAGE}-gettogethers`;
  process.env.TEST_BASE_URL =
    "https://psx2k0b8se.execute-api.eu-west-1.amazonaws.com/sit/api";
};
