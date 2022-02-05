import * as d3 from 'https://cdn.skypack.dev/d3';
const wrapperDom = document.querySelector("#wrapper")
const dataset = JSON.parse(wrapperDom.dataset.featureHistory)

const dateParser = d3.isoParse
const xAccessor = d => dateParser(d.date)
const yAccessor = d => d.percentage

let dimensions = {
  width: wrapperDom.clientWidth * 0.9,
  height: 500,
  margin: {
    top: 15,
    right: 15,
    bottom: 40,
    left: 60,
  }
}
dimensions.boundedWidth = dimensions.width
  - dimensions.margin.left
  - dimensions.margin.right
dimensions.boundedHeight = dimensions.height
  - dimensions.margin.top
  - dimensions.margin.bottom
console.log('dimensions', dimensions)
const wrapper = d3.select('#wrapper')
  .append("svg")
    .attr("width", dimensions.width)
    .attr("height", dimensions.height)
const bounds = wrapper.append("g")
  .style("transform", `translate(${
    dimensions.margin.left
  }px, ${
    dimensions.margin.top
  }px)`)


const yScale = d3.scaleLinear().domain([0, 100])
  .range([dimensions.boundedHeight, 0])

const xScale = d3.scaleTime()
  .domain(d3.extent(dataset, xAccessor))
  .range([0, dimensions.boundedWidth])

// const lowerSweetSpotPlacement = yScale(70)
const upperSweetSpotPlacement = yScale(90)

const sweetSpotRange = bounds.append("rect")
  .attr("x", 0)
  .attr("width", dimensions.boundedWidth)
  .attr("y", upperSweetSpotPlacement)
  .attr("height",
        dimensions.boundedHeight - yScale(20))
  .attr("fill", "#C4B5FD")

const lineGenerator = d3.line()
  .x(d => xScale(xAccessor(d)))
  .y(d => yScale(yAccessor(d)))

const line = bounds.append("path")
  .attr("d", lineGenerator(dataset))
  .attr("fill", "none")
  .attr("stroke", "#6D28D9")
  .attr("stroke-width", 2)