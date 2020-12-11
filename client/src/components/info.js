export const Info = () => {
    return (
          <div id="accordion">
            <div className="card bg-transparent">
              <div className="card-header" id="infoId">
                <button style={{width: "100%", outline: "none", boxShadow: "0px 0px"}} className="btn" data-toggle="collapse" data-target="#infoCollapse" aria-expanded="true" aria-controls="infoCollapse">
                <h5>How this works?</h5>
                </button>
              </div>

              <div id="infoCollapse" className="collapse" aria-labelledby="infoId" data-parent="#accordion">
                <div className="card-body">
                  <ul style={{paddingLeft: "15px"}}>
                    <li>
                      <p>As first input, we provide District Data in .csv file format. Similarly, as second input, we provide Lab Data.</p>
                    </li>
                    <li>
                      <p>After submitting the required files, you will be redirected to Allocation Tab where we display each step in a Tabular form(Not mandatorily sorted).</p>
                    </li>
                    <li>
                      <p>In Aggregate Tab, we display each Lab's state in Tabular form(Capacity, backlogs etc.).</p>
                    </li>
                    <li>
                      <p>In Map Tab, we map each district of Karnataka(Not By Scale), and shade them with appropriate density based on no. of swabs originating from there. <br></br>
                      District with Maximum number of cases is displayed in Red. On hovering/tapping over each district, we display its information.</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
    )
}