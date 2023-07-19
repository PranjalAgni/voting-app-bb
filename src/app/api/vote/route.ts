import { NextResponse } from "next/server";

export async function GET(request: Request) {
  let successRequest = 0;
  let failureRequest = 0;
  for (let idx = 0; idx < 50; idx++) {
    const isSuccess = await doVote();
    if (isSuccess) {
      successRequest += 1;
    } else {
      failureRequest += 1;
    }
  }

  console.log("Status: ", {
    successRequest,
    failureRequest,
  });

  return NextResponse.json(
    {
      message: "OK",
      data: {
        success: successRequest,
        failed: failureRequest,
      },
    },
    { status: 200 }
  );
}

const doVote = async (): Promise<boolean> => {
  try {
    const votingURL =
      "https://jc-voting-prod.api.engageapps.jio/api/voting/questions/q-e4d1acfe-abd5-4417-a80b-1a9e0f54174a/answer";
    const token =
      "eyJhbGciOiJIUzI1NiJ9.eyJwbGF0Zm9ybSI6Imppb3Zvb3QiLCJ1c2VyaWR0eXBlIjoidXVpZCIsImlzSmlvVXNlciI6ZmFsc2UsImlzR3Vlc3QiOmZhbHNlLCJwaG9uZU5vIjoiMzM2NjBiNzQtM2U5YS00ZWJhLTlmMTMtNzBkNTQ3NmUwOTNkIiwicHJvZmlsZUlkIjoiMTE1ODc3YWQtZDE3Mi00YTAwLWI2OTMtMDlkZmNjNTEwOTMyIiwiaWF0IjoxNjg5NzA0MzA0LCJleHAiOjE2ODk3OTA3MDR9.ICKpSLJJexKR0wjDYDMpctvdTV33P0J6pxL3MAxWJyg";
    const response = await fetch(votingURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
        "user-agent":
          "Mozilla/5.0 (iPhone; CPU iPhone OS 16_5_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148",
        origin: "https://engage.jiocinema.com",
        referer: "https://engage.jiocinema.com/",
      },
      body: JSON.stringify({
        answer: ["alpha_Elvish Yadav"],
      }),
    });
    const statusCode = response.status;
    if (statusCode === 200) {
      return true;
    }
    return false;
  } catch (ex) {
    console.log("Error: ", ex);
    return false;
  }
};
