import $ from "jquery";

export function fetchResumeData() {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: "./resumeData.json",
      dataType: "json",
      cache: false,
      success: function (data) {
        resolve(data);
      },
      error: function (xhr, status, err) {
        reject(err);
      },
    });
  });
}
